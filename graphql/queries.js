import { gql } from '@apollo/client';

export const TIMELINE_QUERY = gql`
  query getTimeline {
    timeline: queryTimelineYear(order: { desc: year }) {
      year
      events(order: { asc: order }) {
        title
        description
      }
    }
  }
`;

export const SKILLS_QUERY = gql`
  query getSkills {
    skills: querySkills(order: { desc: stars }) {
      stars
      name
    }
  }
`;
