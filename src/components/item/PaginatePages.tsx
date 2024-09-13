import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatchAndSelector';
import { selectPaginatedItems } from '../../store/item/selectors';
import { getAllItems } from '../../store/item/slice';
import { NumberButton, PageButton, PaginationContainer } from '../../styles/paginate_pages.styles';

const PaginatePages: React.FC = () => {
    const dispatch = useAppDispatch();
    const { current_page, last_page } = useAppSelector(selectPaginatedItems);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= last_page) {
            dispatch(getAllItems({ page })); 
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= last_page; i++) {
            pageNumbers.push(
                <NumberButton
                    key={i}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </NumberButton>
            );
        }
        return pageNumbers;
    };

    return (
        <PaginationContainer>
            <PageButton 
                onClick={() => handlePageChange(current_page - 1)} 
                disabled={current_page === 1}
            >
                {'<'}
            </PageButton>
            {renderPageNumbers()}
            <PageButton 
                onClick={() => handlePageChange(current_page + 1)} 
                disabled={current_page === last_page}
            >
                {'>'}
            </PageButton>
        </PaginationContainer>
    );
};

export default PaginatePages;
