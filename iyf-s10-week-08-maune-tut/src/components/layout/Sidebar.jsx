function Sidebar() {
    return (
        <aside style={{ padding: '20px', borderLeft: '1px solid #444', minWidth: '200px' }}>
            <h3>About CommunityHub</h3>
            <p>A place to share your React journey with others.</p>
            <h4>Popular Tags</h4>
            <ul>
                <li>#React</li>
                <li>#Vite</li>
                <li>#JavaScript</li>
            </ul>
        </aside>
    );
}
export default Sidebar;