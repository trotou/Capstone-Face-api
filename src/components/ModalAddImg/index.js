import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useServices } from '../../providers/Services';
import { useEmotions } from '../../providers/Emotions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function FormDialogImg() {
    const [open, setOpen] = React.useState(false);
    const { imageRegister, userId, changes, setChanges, data64 } = useServices();
    const { emotions } = useEmotions();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const userImgAddSchema = yup.object().shape({
        title: yup.string().required('campo obrigatório'),
        date: yup.date().required('campo obrigatório')
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userImgAddSchema)
    });

    const handleForm = (data) => {
        imageRegister({
            title: data.title,
            emotions: emotions,
            date: data.date,
            userId: userId(),
            base: data64
        });
        setOpen(false);
        setChanges(!changes);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Save img stats
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Image Title</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="title"
                        label="Title"
                        fullWidth
                        inputProps={register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        type="date"
                        fullWidth
                        inputProps={register('date')}
                        error={!!errors.date}
                        helperText={errors.date?.message}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit(handleForm)} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
