import { CarouselDiv, ButtonsDiv } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import { Button } from '@material-ui/core/';
import TimelineIcon from '@material-ui/icons/Timeline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// ------------------------------------------------
const ThumbCarousel = ({ item, handleDelete, handleLoad }) => {
    const classes = TopBarStyles();

    return (
        <CarouselDiv>
            <h2 style={{ width: '100%', marginTop: '0' }}>{item.title}</h2>
            <img alt={item.title} src={item.base} width="200px" height="125px" />
            <p>{item.date.split('T')[0]}</p>
            <ButtonsDiv>
                <Button
                    className={classes.menuButton}
                    style={{ width: '96px' }}
                    onClick={() => handleLoad(item.emotions)}
                >
                    <TimelineIcon style={{ marginRight: '3px' }} />
                    Load
                </Button>
                <Button
                    className={classes.menuButton}
                    style={{ width: '96px' }}
                    onClick={() => handleDelete(item.id)}
                >
                    <DeleteForeverIcon style={{ marginRight: '3px' }} />
                    Delete
                </Button>
            </ButtonsDiv>
        </CarouselDiv>
    );
};

export default ThumbCarousel;
