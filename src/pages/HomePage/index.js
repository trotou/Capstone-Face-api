import React from 'react';
import { motion } from 'framer-motion';
import FaceApiVideo from '../../temporary/faceapivideo';
import Graphs from '../../components/Graphs';
// import FaceApiVideo from '../../temporary/faceapivideo';

const HomePage = () => {
    const data = [
        {
            Angry: 179,
            Happy: 32,
            Fearful: 56,
            Neutral: 42,
            Surprised: 86,
            Disgusted: 116,
            Sad: 60
        },
        {
            Angry: 114,
            Happy: 112,
            Fearful: 66,
            Neutral: 19,
            Surprised: 156,
            Disgusted: 14,
            Sad: 60
        },
        {
            Angry: 34,
            Happy: 12,
            Fearful: 56,
            Neutral: 98,
            Surprised: 89,
            Disgusted: 84,
            Sad: 60
        },
        {
            Angry: 81,
            Happy: 117,
            Fearful: 117,
            Neutral: 134,
            Surprised: 164,
            Disgusted: 61,
            Sad: 60
        },
        {
            Angry: 135,
            Happy: 57,
            Fearful: 187,
            Neutral: 29,
            Surprised: 127,
            Disgusted: 152,
            Sad: 60
        },
        {
            Angry: 182,
            Happy: 11,
            Fearful: 42,
            Neutral: 130,
            Surprised: 186,
            Disgusted: 88,
            Sad: 60
        },
        {
            Angry: 97,
            Happy: 200,
            Fearful: 156,
            Neutral: 48,
            Surprised: 69,
            Disgusted: 180,
            Sad: 60
        },
        {
            Angry: 67,
            Happy: 26,
            Fearful: 85,
            Neutral: 56,
            Surprised: 191,
            Disgusted: 95,
            Sad: 60
        },
        {
            Angry: 101,
            Happy: 134,
            Fearful: 22,
            Neutral: 79,
            Surprised: 22,
            Disgusted: 118,
            Sad: 60
        }
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <FaceApiVideo />
            </div>
            <Graphs data={data} />
        </motion.div>
    );
};

export default HomePage;
