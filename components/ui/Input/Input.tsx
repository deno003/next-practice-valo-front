import TextField from '@material-ui/core/TextField'
import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string,
    id:string,
    handleSetInputUsername: (platform:string) => void
}

const Input:React.FC<Props> = (props) => {
    const { placeholder, id, handleSetInputUsername } = props

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        handleSetInputUsername((event.target as HTMLInputElement).value);
    };

    return (
        <div>
            <TextField
                onChange={handleChange}
                id={id}
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;