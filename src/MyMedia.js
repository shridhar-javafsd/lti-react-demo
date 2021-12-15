
const MyMedia = () => {
    return (
        <div>
            <p className="display-4 text-primary">My Media Component</p>
            <p>YouTube Video</p>
            <div>
                <iframe width="853" height="480"
                    src="https://www.youtube.com/embed/C6fN3GizNRE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <p>Tweet</p>
            <p>LinkedIn</p>
            <p>FaceBook Post</p>
            <p>Insta Post</p>
        </div>
    );

}

export default MyMedia;