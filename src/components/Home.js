const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://images.financialexpress.com/2021/10/lti.jpg")`,
                backgroundPosition: 'cover',
            }} >
            <div className="container"
                style={{ height: "100vh" }}>
                <p className="display-4 text-dark pt-3">Welcome to LTI React App</p>
            </div>
        </div >
    );
}

export default Home;

