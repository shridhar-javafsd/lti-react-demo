
const MyMedia = () => {
    return (
        <div className="container">
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
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">React Conf 2021 Replay is starting in 15 minutes! Watch the live stream and join the discussion at: <a href="https://t.co/dvvan6z1il">https://t.co/dvvan6z1il</a></p>&mdash; React (@reactjs) <a href="https://twitter.com/reactjs/status/1468827005525368832?ref_src=twsrc%5Etfw">December 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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