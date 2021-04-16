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
    const [saving, setSaving] = React.useState(false);
    const { imageRegister, userId, getUserImages, data64 } = useServices();
    const { emotionsImage } = useEmotions();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userImgAddSchema)
    });

    const handleClickOpen = () => {
        setOpen(true);
        setSaving(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleForm = async (data) => {
        setSaving(true);
        await imageRegister({
            title: data.title,
            emotions: emotionsImage,
            date: data.date,
            userId: userId(),
            base: data64
        });
        handleClose();
        await getUserImages(userId());
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Save img stats
            </Button>
            <Dialog
                style={saving && { cursor: 'wait' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
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
                    <Button disabled={saving} onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={saving} onClick={handleSubmit(handleForm)} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialogImg;
