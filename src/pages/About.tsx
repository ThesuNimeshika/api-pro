import { useEffect, useState } from 'react';
import missionBg from '../assets/mission.png';

type User = {
  id: number;
  name: string;
  email: string;
  website: string;
};

const About = () => {
  const [team, setTeam] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=8')
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="about-main">
      <section
        className="about-mission"
        style={{
          position: 'relative',
          width: '58vw', // less wide for better balance
          marginLeft: 'auto',
          marginRight: 'auto',
          background: `url(${missionBg}) center/cover no-repeat`,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.66)', // less opacity for more visible image
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="about-title">Our Mission</h2>
          <h3 className="about-headline">We Empower Developers to Build The Future.</h3>
          <p className="about-body">
            In today's digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex. API PRO was founded on a simple principle: to give developers and businesses the tools they need to build, manage, and scale their APIs without the headache. We handle the complexity, so you can focus on creating amazing products.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="bubbles-bg">
          {/* Animated bubbles background */}
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`bubble bubble-${i+1}`}></span>
          ))}
        </div>
        <h2 className="team-title">The Team Behind API PRO</h2>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                border: '5px solid #e0e7ff',
                borderTop: '5px solid #6366f1',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '1rem',
              }}
            />
            <p>Loading team...</p>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <div className="team-grid">
            {team.map(({ id, name, email, website }) => (
              <div key={id} className="team-card">
                <div className="profile-pic">
                  <img
                    src={`https://api.dicebear.com/7.x/identicon/svg?seed=${name}`}
                    alt={name}
                  />
                </div>
                <h3 className="team-name">{name}</h3>
                <p className="team-email">Email: <a href={`mailto:${email}`}>{email}</a></p>
                <p className="team-website">Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default About;
