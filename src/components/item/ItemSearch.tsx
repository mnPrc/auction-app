import { selectSearchTerm } from "../../store/item/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { getAllItems, setSearchTerm } from "../../store/item/slice";
import { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "../../styles/item_search.styles";

const ItemSearch: React.FC = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);
    const [search, setSearch] = useState(searchTerm);

    const handleSearch = () => {
        
        dispatch(setSearchTerm(search));
        dispatch(getAllItems({ search, page: 1 }));
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search items..."
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
    );
};

export default ItemSearch;