import './TodosLoading.css'
import Skeleton from '@mui/material/Skeleton';

const TodosLoading = () => {

    return (
    <li className="TodoItem">
        {/* <CompleteIcon/> */}

        <Skeleton variant="rectangular" sx={{width: '100%', background: '#f0f4fc',}} height={70} />

        {/* <DeleteIcon/> */}
    </li>
    )
}

export { TodosLoading };