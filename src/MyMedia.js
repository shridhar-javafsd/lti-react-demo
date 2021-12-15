
const MyMedia = () => {
    return (
        <div>
            <p className="display-4 text-primary">My Media Component</p>
            <p>YouTube Video</p>
            <div>
                {/* <iframe width="853" height="480" */}
                <iframe width="480" height="320"
                    src="https://www.youtube.com/embed/C6fN3GizNRE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <p>Tweet</p>
            <div>

            </div>
            <p>LinkedIn</p>
            <div>

            </div>
            <p>FaceBook Post</p>
            <div>

            </div>
            <p>Insta Post</p>
            <div>

            </div>
        </div>
    );

}

export default MyMedia;