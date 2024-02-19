import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Explore my professional qualifications and career achievements!</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx" style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Link to your resume in the public directory */}
              <a href={`${process.env.PUBLIC_URL}/Ayushi_Updated.docx`} download="Ayushi_Updated.docx" style={{ textDecoration: 'none', width: '100%' }}>
                <button type="button" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                  Download Resume
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
