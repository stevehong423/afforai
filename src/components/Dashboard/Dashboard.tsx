import FAQSection from "../FAQSection/FAQSection";
import Reviews from "../Reviews/Reviews";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="user-interface">
      <div className="dashboard">
        <img
          src="https://i.postimg.cc/jj9CzGxt/laptop-landing-3.png"
          alt="violet-gradient"
          className="violent-gradient"
        />
        <img
          src="https://i.postimg.cc/g0fkw8s0/dashboard.png"
          alt="dashboard"
          style={{ width: "75%" }}
          className="dashboard"
        />
      </div>

      <div className="users">
        <p>
          Loved by <span>20,000+</span> users around the world
        </p>
        <img
          src="https://i.postimg.cc/9Q0WJJNM/laptop-landing-2.png"
          alt="users"
          className="user-images"
        />
      </div>

      <div className="afforai-features">
        <div className="afforai-features-text">
          <h1>Say goodbye to long, tiresome documents</h1>
          <p>Afforai seamlessly translates documents, files, spreadsheets &</p>
          <p>websites, filtering out what you don't need & answering your</p>
          <p>specific questions within seconds</p>
          <ul>
            <li>
              <img
                src="https://i.postimg.cc/rsqTWJrq/greencheck-1.jpg"
                alt="list-item"
              />
              A whip smart research assistant
            </li>
            <li>
              <img
                src="https://i.postimg.cc/rsqTWJrq/greencheck-1.jpg"
                alt="list-item"
              />
              We speak every language
            </li>
            <li>
              <img
                src="https://i.postimg.cc/rsqTWJrq/greencheck-1.jpg"
                alt="list-item"
              />
              Reliable data citation for answers
            </li>
            <li>
              <img
                src="https://i.postimg.cc/rsqTWJrq/greencheck-1.jpg"
                alt="list-item"
              />
              Fort-Knox level data security
            </li>
          </ul>
        </div>
        <img
          src="https://i.postimg.cc/0j5gryTQ/laptop-landing-4.png"
          alt="users"
          className="afforai-features-image"
        />
      </div>

      <div className="productivity-container">
        <div className="productivity">10x your productivity</div>
        <h1>Save yourself from stress & streamline your workflow</h1>
        <div className="productivity-description">
          The average worker spends 9 hours per week looking through & gathering
          information from thick stacks of documents. With Afforai, you can save
          yourself 8 hours per week (plus a lot of headaches).
        </div>
        <img
          src="https://i.postimg.cc/Cxq2h8R7/laptop-landing-5.png"
          alt="person with afforai"
          className="afforai-image"
        />
      </div>

      <div className="productivity-container">
        <div className="productivity">Why choose us?</div>
        <h1>Built for the user</h1>
        <div className="productivity-description">
          Afforai is where exceptional customer focus meets <br></br>exceptional
          technology.
        </div>

        <div className="image-container">
          <div className="image-card">
            <img
              src="https://i.postimg.cc/R0mgvD5C/cross-language-query.png"
              alt="cross-language"
            />
            <div className="image-card-text-container">
              <div className="new-user-feature">
                Cross Language Querying<div>New</div>
              </div>
              <p className="image-card-text">
                Afforai is able to translate your documents to more than 100
                languages, meaning wherever you’re from, you can be assured we
                can help.
              </p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://i.postimg.cc/507gq9Hj/multiple-files-supported.png"
              alt="multiple files supported"
            />
            <div className="image-card-text-container">
              Multiple file types supported
              <p className="image-card-text">
                Afforai can extract data from a multitude of formats, including;
                PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links
                from Websites. The possibilities are limitless!
              </p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://i.postimg.cc/y6GnDd4b/valuable-data-citation.png"
              alt="valuable data citation"
            />
            <div className="image-card-text-container">
              <div className="new-user-feature">
                Validation Data Citation<div>New</div>
              </div>
              <p className="image-card-text">
                Afforai is able to show exactly where your data has been
                extracted from & highlight it for you, so you never loose your
                time validating information again.
              </p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://i.postimg.cc/7Z3NtnCF/unbreakable-security.png"
              alt="unbreakable security"
            />
            <div className="image-card-text-container">
              Unbreakable Security
              <p className="image-card-text">
                Afforai uses Azure Server & Azure OpenAI API. In other words,
                your data is more than safe with us.{" "}
                <a href="https://afforai.com/security">Learn more.</a>
              </p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://i.postimg.cc/4xQSHg1H/builtin-document-viewer.png"
              alt="builtin document viewer"
            />
            <div className="image-card-text-container">
              Built in Document Viewer
              <p className="image-card-text">
                Never Switch tabs again. Afforai’s document viewer means that
                you can have your uploaded files right next to your chatbot,
                giving you the ability to search the file, and refer to it for
                data citations.
              </p>
            </div>
          </div>
        </div>

        <div className="reviews">
          <Reviews />
        </div>

        <div className="users">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
