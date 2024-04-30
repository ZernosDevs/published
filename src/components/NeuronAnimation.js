import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as SvgComponent } from './NeuronSVG'; // Adjust path as needed

const NeuronAnimation = () => {
  useEffect(() => {
    // Assuming each dendrite has an ID like 'dendrite1', 'dendrite2', etc.
    const dendrites = ['dendrite1', 'dendrite2', 'dendrite3']; // List all dendrite IDs

    dendrites.forEach(dendriteId => {
      // Target the element by ID and create a swaying motion
      gsap.to('#dendrite-1', {
        rotation: 8, // Adjust rotation degree for the effect
        transformOrigin: 'bottom', // Adjust according to your SVG structure
        duration: 2, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-9', {
        rotation: 8, // Adjust rotation degree for the effect
        transformOrigin: 'right', // Adjust according to your SVG structure
        duration: 3, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-4', {
        rotation: 6, // Adjust rotation degree for the effect
        transformOrigin: 'left', // Adjust according to your SVG structure
        duration: 5, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-7', {
        rotation: 3, // Adjust rotation degree for the effect
        transformOrigin: '110%, -30%', // Adjust according to your SVG structure
        duration: 15, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-8', {
        rotation: 8, // Adjust rotation degree for the effect
        transformOrigin: '100%, 10%', // Adjust according to your SVG structure
        duration: 5, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-5', {
        rotation: 3, // Adjust rotation degree for the effect
        transformOrigin: '50%, 0%', // Adjust according to your SVG structure
        duration: 2, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-3', {
        rotation: 5, // Adjust rotation degree for the effect
        transformOrigin: '0%, 120%', // Adjust according to your SVG structure
        duration: 2, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
      gsap.to('#dendrite-2', {
        rotation: 5, // Adjust rotation degree for the effect
        transformOrigin: '0%, 120%', // Adjust according to your SVG structure
        duration: 4, // Duration of the animation to complete one cycle
        yoyo: true, // Make the animation reverse on alternate cycles for a swaying effect
        repeat: -1, // Repeat the animation indefinitely
        ease: 'sine.inOut', // Use a smooth easing for natural motion
      });
    });
  }, []);

  return <div><SvgComponent /></div>;
};

export default NeuronAnimation;