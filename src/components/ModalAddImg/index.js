import React from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userImgAddSchema } from '../../Helpers/Constants/schemas';
import { useServices } from '../../providers/Services';
import { useEmotions } from '../../providers/Emotions';

// ------------------------------------------------
const FormDialogImg = () => {
    const [open, setOpen] = React.useState(false);
    const { imageRegister, userId, changes, setChanges, data64 } = useServices();
    const { emotions } = useEmotions();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userImgAddSchema)
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleForm = (data) => {
        imageRegister({
            title: data.title,
            emotions: emotions,
            date: data.date,
            userId: userId(),
            base: data64
        });
        handleClose();
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
};

export default FormDialogImg;
