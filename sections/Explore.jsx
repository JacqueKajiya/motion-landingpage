'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';

import { exploreWorlds } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col}`}
    />
    <TypingText title="| The World"
      textStyles="text-center"
    />
    <TitleText title={<>Choose de world you want <br className="md:block hidden" /> to explore </>} textStyles="text-center" />
    Explore section
  </section>
);

export default Explore;
