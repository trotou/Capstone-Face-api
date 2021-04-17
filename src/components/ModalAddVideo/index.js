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
import { userVideoAddSchema } from '../../Helpers/Constants/schemas';
import { useServices } from '../../providers/Services';
import { useEmotions } from '../../providers/Emotions';

// ----------------------------------------------------
const FormDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const { videoRegister, userId, getUserVideos, data64 } = useServices();
    const { emotionsVideo } = useEmotions();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userVideoAddSchema)
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
        await videoRegister({
            title: data.title,
            emotions: emotionsVideo,
            date: data.date,
            userId: userId(),
            base: data64
        });
        handleClose();
        await getUserVideos(userId());
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Save video stats
            </Button>
            <Dialog
                style={saving && { cursor: 'wait' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Video Title</DialogTitle>
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
                    <Button
                        disabled={saving}
                        type="submit"
                        onClick={handleSubmit(handleForm)}
                        color="primary"
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;
