
export default function ContactSection() {
  return (
    <div style={{ boxShadow: '0 4px 32px 0 rgba(80,80,120,0.10)', background: '#fff', borderRadius: 18, maxWidth: 480, margin: '48px auto', padding: '2.5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 36, marginBottom: 4 }}>📞</span>
        <h1 style={{ fontWeight: 700, fontSize: '2rem', margin: 0, color: '#22223b' }}>Contact Us</h1>
      </div>
      <div style={{ color: '#6c6f7a', fontSize: '1.08rem', marginBottom: 24, textAlign: 'center' }}>
        Reach out to us using the details below.
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.08rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <span style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem' }}>Email</span>
          <span style={{ color: '#6366f1', fontWeight: 500 }}>support@lmsportal.com</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <span style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem' }}>Phone</span>
          <span style={{ color: '#6366f1', fontWeight: 500 }}>+1 234 567 8901</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <span style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem' }}>Address</span>
          <span style={{ color: '#64748b', fontWeight: 500 }}>123 Learning Ave, Edutown, USA</span>
        </div>
      </div>
    </div>
  );
}
