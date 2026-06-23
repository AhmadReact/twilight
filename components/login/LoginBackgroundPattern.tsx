import Box from '@mui/material/Box';

export default function LoginBackgroundPattern() {
  return (
    <>
      <Box
        aria-hidden
        className="login-float"
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(195, 134, 255, 0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        className="login-float-reverse"
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(150, 67, 232, 0.14) 0%, transparent 70%)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        className="login-glow-pulse"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(195, 134, 255, 0.25) 0%, transparent 70%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        className="login-grid-drift"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '768px',
          height: '768px',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
            linear-gradient(to right, #EAECF0 1px, transparent 1px),
            linear-gradient(to bottom, #EAECF0 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: 'center',
          WebkitMaskImage: 'radial-gradient(circle at center, #000 0%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center, #000 0%, transparent 100%)',
        }}
      />
    </>
  );
}
