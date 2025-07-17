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
        {activeLink === 'Authentication' ? (
          <AuthenticationDoc />
        ) : activeLink === 'GET /users' ? (
          <GetUsersDoc />
        ) : activeLink === 'POST /users' ? (
          <PostUsersDoc />
        ) : activeLink === 'GET /analytics' ? (
          <GetAnalyticsDoc />
        ) : activeLink === 'GET /logs' ? (
          <GetLogsDoc />
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

const PostUsersDoc = () => (
  <>
    <h2>POST /v1/users</h2>
    <p>Creates a new user in your project.</p>
    <h3>Example Request</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`fetch('https://api-pro.com/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Doe',
    email: 'jane@apipro.com',
    website: 'janedoe.com',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
    </pre>
    <h3>Example Response (201 Created)</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`{
  "id": 3,
  "name": "Jane Doe",
  "email": "jane@apipro.com",
  "website": "janedoe.com"
}`}</code>
    </pre>
  </>
);

const AuthenticationDoc = () => (
  <>
    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      <span role="img" aria-label="lock">🔐</span>Authentication
    </h2>
    <p>To access the API, all requests must be authenticated using a <b>Bearer Token</b>. You can generate this token from your API Pro dashboard.</p>
    <p>Include the token in the <b>Authorization</b> header of every request you make.</p>
    <h3>Example Request</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`fetch('https://api-pro.com/v1/some-endpoint', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`}</code>
    </pre>
    <h3>Headers</h3>
    <table style={{ borderCollapse: 'collapse', marginBottom: '1em' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '0.4em 1em', background: '#f4f4f4' }}>Key</th>
          <th style={{ border: '1px solid #ddd', padding: '0.4em 1em', background: '#f4f4f4' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.4em 1em' }}>Authorization</td>
          <td style={{ border: '1px solid #ddd', padding: '0.4em 1em' }}>Bearer YOUR_API_TOKEN</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '0.4em 1em' }}>Content-Type</td>
          <td style={{ border: '1px solid #ddd', padding: '0.4em 1em' }}>application/json</td>
        </tr>
      </tbody>
    </table>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginBottom: '1em', color: '#d97706' }}>
      <span role="img" aria-label="warning">⚠️</span>
      <span><b>Note:</b> If the token is missing or invalid, the API will return a <b>401 Unauthorized</b> error.</span>
    </div>
    <h3>Example Error Response (401 Unauthorized)</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`{
  "error": "Unauthorized",
  "message": "Invalid or missing API token"
}`}</code>
    </pre>
  </>
);

const GetAnalyticsDoc = () => (
  <>
    <h2>GET /v1/analytics</h2>
    <p>Retrieves usage analytics for your API project — including requests, errors, and performance metrics.</p>
    <h3>Example Request</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`fetch('https://api-pro.com/v1/analytics', {
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
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`{
  "total_requests": 15824,
  "successful_requests": 15310,
  "failed_requests": 514,
  "average_response_time_ms": 142,
  "data_range": "2025-07-01 to 2025-07-17"
}`}</code>
    </pre>
  </>
);

const GetLogsDoc = () => (
  <>
    <h2>GET /v1/logs</h2>
    <p>Fetches a list of recent API request logs for your project, including status, endpoint, and timestamp.</p>
    <h3>Example Request</h3>
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`fetch('https://api-pro.com/v1/logs', {
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
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: 6, overflowX: 'auto' }}>
      <code>{`[
  {
    "id": "log_001",
    "method": "GET",
    "endpoint": "/v1/users",
    "status": 200,
    "timestamp": "2025-07-17T08:42:15Z"
  },
  {
    "id": "log_002",
    "method": "POST",
    "endpoint": "/v1/users",
    "status": 201,
    "timestamp": "2025-07-17T08:40:03Z"
  }
  // ...more logs
]`}</code>
    </pre>
  </>
);

export default Docs;
