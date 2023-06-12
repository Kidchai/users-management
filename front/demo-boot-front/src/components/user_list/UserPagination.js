import { Pagination } from 'react-bootstrap';

const UserPagination = ({ currentPage, handlePageChange, totalUsers, itemsPerPage }) => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Pagination>
                {[...Array(Math.ceil(totalUsers / itemsPerPage))].map((_, index) => (
                    <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default UserPagination;