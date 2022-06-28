import {RouterOutlet} from 'react-hook-guard';
import { Link } from 'react-router-dom';
import {useAuth} from '../guards/AuthProvider';

function WithNavbarLayout({...props}: any) {
    const {logout} = useAuth();
    return (
        <>
            This is with navbar layout. The layout for logged in user with full features.
            <div>
                <Link to={'/tt/component2'} style={{marginRight: '5px'}}>
                    Component 2
                </Link>
                <Link to={'/vovi/component3'}>
                    Component 3
                </Link>
            </div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            <div>
                <RouterOutlet {...props} />
            </div>
        </>
    );
}

export default WithNavbarLayout;
