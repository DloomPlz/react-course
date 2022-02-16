import { Link } from 'react-router-dom'
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context"

function MainNavigation() {

    const favortiesCtx = useContext(FavoritesContext)
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <Link className={classes.a} to="/">Home</Link>
                </li>
                <li className={classes.li}>
                    <Link className={classes.a} to="/new-meetup">Add a meetup</Link>
                </li>
                <li className={classes.li}>
                    <Link className={classes.a} to="/favorites">Favorites <span className={classes.badge}>{favortiesCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;