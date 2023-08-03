import './TodosLoading.css'
import Skeleton from '@mui/material/Skeleton';

const TodosLoading = () => {

    return (
    <div className="TodoItem">
        <Skeleton variant="rectangular" sx={{width: '100%', background: '#f0f4fc',}} height={70} />
    </div>
    )
}

export { TodosLoading };