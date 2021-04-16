import { CarouselDiv } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import { Button } from '@material-ui/core/';

const ThumbCarousel = ({ title, date, handleDelete, handleLoad, id, base, emotions }) => {
    const classes = TopBarStyles();
    return (
        <CarouselDiv>
            <h2>{title}</h2>
            <img alt={title} src={base} width="200px" height="125px" />
            <span>{date.split('T')[0]}</span>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Button
                    className={classes.menuButton}
                    style={{ width: '76px' }}
                    onClick={() => handleLoad(emotions)}
                >
                    Load
                </Button>
                <Button
                    className={classes.menuButton}
                    style={{ width: '76px' }}
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </Button>
            </div>
        </CarouselDiv>
    );
};

export default ThumbCarousel;
