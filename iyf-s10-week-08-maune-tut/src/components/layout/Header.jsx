function Header() {
    return (
        <header className="header" style={{ padding: '1rem', background: '#333', color: '#fff' }}>
            <h1>CommunityHub</h1>
            <nav>
                <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
                    <li><a href="#" style={{ color: '#fff' }}>Home</a></li>
                    <li><a href="#" style={{ color: '#fff' }}>Posts</a></li>
                    <li><a href="#" style={{ color: '#fff' }}>About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;