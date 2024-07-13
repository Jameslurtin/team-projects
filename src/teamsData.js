import { getColor } from './colorUtils';

const teamsData = [
  {
    head: "Dasari",
    projects: [
      { name: "DTS", members: ["Ramana", "Debmitra", "Kandukuri Saneeth"] },
      { name: "Search Automation", members: ["Malavika"] },
      { name: "NTP API / NCS 2.0", members: [] },
      { name: "Condor", members: ["Patric"] },
      { name: "Capri", members: ["Sowmya", "Matt"] },
    ],
  },
  {
    head: "Mattew",
    projects: [
      { name: "DaNexus", members: ["Patric"] },
    ],
  },
  {
    head: "Nimesh",
    projects: [
      { name: "Calico", members: ["Venkatesh Garikapati", "Rajendi VinayKumar"] },
    ],
  },
  {
    head: "Garima",
    projects: [
      { name: "Enterprise Billing", members: ["Rajeeva", "Pavan"] },
      { name: "TIQe", members: ["Aarathi", "Rajitha"] },
    ],
  },
  {
    head: "Mahesh",
    projects: [
      { name: "DDG", members: ["Ramakrishna", "Matt"] },
      { name: "TRD / TAM", members: ["Gayathri", "Mounika"] },
      { name: "DataTree", members: ["Sambit", "Nawaz"] },
      { name: "NWT", members: ["Malavika", "Mounika"] },
      { name: "VMS", members: ["Sambit"] },
    ],
  },
].map((team, teamIndex) => ({
  ...team,
  color: getColor(teamIndex),
  projects: team.projects.map((project, projectIndex) => ({
    ...project,
    color: getColor(projectIndex)
  }))
}));

export default teamsData;
