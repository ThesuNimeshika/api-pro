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
          width: '100%',
          background: `url(${missionBg}) center/cover no-repeat`,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.62)', // strong transparency for clarity
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
          <p>Loading team...</p>
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
