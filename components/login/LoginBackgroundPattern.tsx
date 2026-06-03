import Box from '@mui/material/Box';

export default function LoginBackgroundPattern() {
  return (
    <Box
      aria-hidden
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
  );
}
