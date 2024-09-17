import { useNavigate } from "react-router-dom";
import {
    useAppDispatch,
    useAppSelector,
} from "../../hooks/useDispatchAndSelector";
import { selectCreateItemErrors } from "../../store/item/selectors";
import { createItem, setCreateItemErrors } from "../../store/item/slice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CreateNewItem } from "../../types/item.types";
import { activeUserSelector } from "../../store/auth/selectors";
import { getActiveUser } from "../../store/auth/slice";
import CreateItemErrors from "../errors/CreateItemErrors";
import { CreateItemForm, FormGroup, Input, Label, SubmitButton, Textarea } from "../../styles/create_item_page.styles";

const DisplayCreateItemForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const activeUser = useAppSelector(activeUserSelector);
    const createItemErrors = useAppSelector(selectCreateItemErrors);

    useEffect(() => {
        dispatch(getActiveUser());
    },[dispatch]);

    console.log(activeUser?.id);

    const [newItem, setNewItem] = useState<CreateNewItem>({
        user_id: 0,
        name: '',
        description: '',
        current_price: 0,
        buy_now_price: 0,
        end_time: 0,
        images: [],
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setNewItem({
                ...newItem,
                images: Array.from(e.target.files),
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setCreateItemErrors([]));

        const formData = new FormData();
        formData.append('name', newItem.name);
        formData.append('description', newItem.description);
        formData.append('current_price', String(newItem.current_price));
        formData.append('buy_now_price', String(newItem.buy_now_price));
        formData.append('end_time', String(newItem.end_time));
        formData.append('user_id', String(activeUser?.id));

        newItem.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        dispatch(
            createItem({
                newItem: formData,
                meta: {
                    onSuccess: () => navigate('/'), 
                },
            })
        );
    };

    return (
        <CreateItemForm onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={newItem.name}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description:</Label>
                <Textarea
                    id="description"
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="current_price">Current Price:</Label>
                <Input
                    type="number"
                    id="current_price"
                    name="current_price"
                    value={newItem.current_price}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="buy_now_price">Buy Now Price:</Label>
                <Input
                    type="number"
                    id="buy_now_price"
                    name="buy_now_price"
                    value={newItem.buy_now_price}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="end_time">End Time (timestamp):</Label>
                <Input
                    type="number"
                    id="end_time"
                    name="end_time"
                    value={newItem.end_time}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="images">Upload Images:</Label>
                <Input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </FormGroup>
            {createItemErrors && <CreateItemErrors errors={createItemErrors}/>}
            <SubmitButton type="submit">Create Item</SubmitButton>
        </CreateItemForm>
    );
};

export default DisplayCreateItemForm;