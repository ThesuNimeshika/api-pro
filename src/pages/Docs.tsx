import { useState } from 'react';

const Docs = () => {
  const [activeLink, setActiveLink] = useState('GET /users');

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '1rem', display: 'flex', gap: '2rem' }}>
      {/* Sidebar */}
      <nav style={{ width: '250px', borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
        <Category title="GETTING STARTED">
          <SidebarLink
            isActive={activeLink === 'Authentication'}
            onClick={() => setActiveLink('Authentication')}
          >
            Authentication
          </SidebarLink>
        </Category>

        <Category title="CORE RESOURCES">
          {['GET /users', 'POST /users', 'GET /analytics', 'GET /logs'].map((link) => (
            <SidebarLink
              key={link}
              isActive={activeLink === link}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </SidebarLink>
          ))}
        </Category>
      </nav>

      {/* Content */}
      <section style={{ flex: 1 }}>
        {activeLink === 'GET /users' ? (
          <GetUsersDoc />
        ) : (
          <p>Documentation content for {activeLink} will go here.</p>
        )}
      </section>
    </main>
  );
};

const Category = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <h4>{title}</h4>
    <div>{children}</div>
  </div>
);

const SidebarLink = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    style={{
      cursor: 'pointer',
      padding: '0.25rem 0',
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#0070f3' : '#333',
    }}
  >
    {children}
  </div>
);

const GetUsersDoc = () => (
  <>
    <h2>GET /v1/users</h2>
    <p>Retrieves a list of all users associated with your project.</p>

    <h3>Example Request</h3>
    <pre
      style={{
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        borderRadius: 6,
        overflowX: 'auto',
      }}
    >
      <code>{`fetch('https://api-pro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
    </pre>

    <h3>Example Response (200 OK)</h3>
    <pre
      style={{
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        borderRadius: 6,
        overflowX: 'auto',
      }}
    >
      <code>{`[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@apipro.com",
    "website": "leanne.com"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@apipro.com",
    "website": "ervin.com"
  }
  // ...more users
]`}</code>
    </pre>
  </>
);

export default Docs;
