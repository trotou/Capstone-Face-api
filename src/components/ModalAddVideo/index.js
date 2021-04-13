import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useServices } from '../../providers/Services';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const { videoRegister } = useServices();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (titulo) => {
        videoRegister({
            title: titulo,
            duration: '1:00',
            emotions: ['sad', 'angry'],
            date: '15/02;1997'
        });
        // setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Save video stats
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Video Title</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" id="name" label="Title" type="email" fullWidth />
                    <TextField margin="dense" id="date" type="date" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
