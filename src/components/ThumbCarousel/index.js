import { CarouselDiv } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import { Button } from '@material-ui/core/';

// ------------------------------------------------
const ThumbCarousel = ({ item, handleDelete, handleLoad }) => {
    const classes = TopBarStyles();

    return (
        <CarouselDiv>
            <h2>{item.title}</h2>
            <img alt={item.title} src={item.base} width="200px" height="125px" />
            <span>{item.date.split('T')[0]}</span>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Button
                    className={classes.menuButton}
                    style={{ width: '76px' }}
                    onClick={() => handleLoad(item.emotions)}
                >
                    Load
                </Button>
                <Button
                    className={classes.menuButton}
                    style={{ width: '76px' }}
                    onClick={() => handleDelete(item.id)}
                >
                    Delete
                </Button>
            </div>
        </CarouselDiv>
    );
};

export default ThumbCarousel;
