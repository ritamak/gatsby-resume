import React from "react";
import AboutCard from "../components/AboutCard";
import styled from "styled-components";
import Seo from "../components/SEO";

const aboutRita = [
  {
    title: "Who am I",
    description: `My name is Rita Mak, I'm 29 years old and I'm a portuguese Web
Developer with a background in Event Production (I used to be an event
producer until the covid-19 appeared...)`,
  },
  {
    title: "Why web development?",
    description: `Well, I was working in the event industy but suddenly I found myself at
  home, with no job and no clue of what to do next. Do nothing is never an
  option for me! That was when I discovered the wonderful world of web
  development. Istarted learning JavaScript by myself and through that I
  found a passion I didn't know I had! I became addicted to coding, so I
  applied, enroled and completed ironhack's Web Development bootcamp in a
  total of 9 intense weeks. I don't have a Bachelor but I have passion,
  commitment and I'm deeply dedicated to become the best developer I can
  be.`,
  },
  {
    title: "My stack",
    description: `JavaScript, React, (a little) TypeScript and Next.js, Gatsby, GraphQL
    Node.js, MongoDB. I'm a native portuguese speaker but I'm very
    confortable with English. Due to my background, I'm a very organized
    person and a team player. I'm used to work under pressure and stress,
    communicate with clients and have fun along the way! Always!`,
  },
  {
    title: "Top soft skills",
    description: `I'm a problem-solver, very resilient, creative, hard-worker and a team
  player.`,
  },
  {
    title: "Super powers",
    description: `Thinking and reacting on the spot (under pressure), solving problems,
  motivating others, organizing projects and activities.`,
  },
  {
    title: "Company goals",
    description: `I look for good ethics, sense of community, teamwork, flexibility, and
  last but not least, a creative environment.`,
  },
  {
    title: "Personal side",
    description: `I have a passion for nature, I am an animal lover and a cooking
  enthusiast. In my free time I like to spend time with the people I love,
  enjoy concerts and all type of cultural events. I find very important to
  take the time to care for myself, both mentally and physically, so I
  also try to workout as many day's a week as possible. I'm also a
  football fan and love to support Benfica.`,
  },
];

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const about = () => {
  return (
    <>
      <Seo title="about" />
      <Container>
        {aboutRita.map((el, index) => {
          console.log("index: ", index);
          if (index % 2 !== 0) {
            return (
              <AboutCard
                right
                key={index}
                title={el.title.toUpperCase()}
                description={el.description}
              />
            );
          } else {
            return (
              <AboutCard
                key={index}
                title={el.title.toUpperCase()}
                description={el.description}
              />
            );
          }
        })}
      </Container>
    </>
  );
};

export default about;
