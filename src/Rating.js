import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = useState(3);

  const images = [
    { src: "/open.jpg", alt: "OPEN", label: "OPEN", isInteractive: true, story: "J Robert Oppenheimer 1904-1967 was an American theoretical physicist and the scientific director of the Los Alamos Laboratory during World War II. He is often called the father of the atomic bomb for his role in the Manhattan Project." },
    { src: "/rrr.jpg", alt: "RRR", label: "RRR", isInteractive: true, story: "STORY: A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers." },
    { src: "/kalki.jpg", alt: "KALKI", label: "KALKI", isInteractive: false },
    { src: "/shangchi.jpg", alt: "Shang Chi", label: "Shang Chi", isInteractive: false },
    { src: "/NoHard.jpg", alt: "NoHard", label: "NoHard", isInteractive: true },
    { src: "/Alien.jpg", alt: "Alien", label: "Alien", isInteractive: true },
    { src: "/godzilla.jpg", alt: "godzilla", label: "godzilla", isInteractive: true },
    { src: "/jackpot.jpg", alt: "jackpot", label: "jackpot", isInteractive: true },
    { src: "/myoldass.jpg", alt: "Avatar", label: "Avatar", isInteractive: true },
    { src: "/neverletgo.jpg", alt: "Avatar", label: "Avatar", isInteractive: true },
    { src: "/TheLords.jpg", alt: "Avatar", label: "Avatar", isInteractive: true },
    { src: "/welivein.jpg", alt: "Avatar", label: "Avatar", isInteractive: true },
    { src: "/Aliens.jpg", alt: "Aliens", label: "Aliens", isInteractive: true },
    { src: "/mufasa.jpg", alt: "mufasa", label: "MUFASA", isInteractive: true },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack the images vertically
        alignItems: 'center',
        padding: 3,
        minHeight: '100vh',
        backgroundColor: 'black',  // Set the background to black
        gap: 4,  // Add spacing between images
      }}
    >
      {/* Large Vertical Image at the top */}
      <Paper
        elevation={10}
        sx={{
          maxWidth: '1600px',
          textAlign: 'center',
          backgroundColor: '#aed6f1',  // Set the Paper background color to #aed6f1
          padding: 25,
          paddingLeft: "600px",
          position: 'relative',  // Enable positioning for the text overlay
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            overflow: 'hidden',
          }}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </Box>
        
        {/* Overlay the story text on the RRR poster */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '40px',  // Move the story text higher (adjusted value)
            left: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black background for text readability
            color: 'white',
            padding: 2,
            borderRadius: 2,
            maxWidth: '90%',
            fontSize: '14px',
          }}
        >
          <Typography variant="body1">{images[0].story}</Typography>
        </Box>

        {/* Rating for the large poster */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        />
        <Typography component="legend">{images[0].label}</Typography>
      </Paper>

      {/* Smaller Posters Below */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {images.slice(1).map((image, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 3,
              width: '250px',
              textAlign: 'center',
              backgroundColor: '#aed6f1',  // Set the Paper background color to #aed6f1
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            {image.isInteractive ? (
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
            ) : (
              <Rating name="read-only" value={value} readOnly />
            )}
            <Typography component="legend">{image.label}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
