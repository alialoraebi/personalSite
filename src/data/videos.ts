interface VideoType {
    id: number;
    title: string;
    icon: string;
    link: string;
}

export const videos: VideoType[] = [
    {
        id: 1,
        title: 'Pandas Part 1',
        icon: 'https://img.youtube.com/vi/6bcIHPXf7XI/maxresdefault.jpg',
        link: 'https://youtu.be/6bcIHPXf7XI'
    },
    {
        id: 2,
        title: 'Pandas Part 2',
        icon: 'https://img.youtube.com/vi/2T0zGyu1gWE/maxresdefault.jpg',
        link: 'https://youtu.be/2T0zGyu1gWE'
    },
    {
        id: 3,
        title: 'SKLearn Tutorial',
        icon: 'https://img.youtube.com/vi/IyTGhzWpTdA/maxresdefault.jpg',
        link: 'https://youtu.be/IyTGhzWpTdA'
    },
    {
        id: 4,
        title: 'Library Program',
        icon: 'https://img.youtube.com/vi/KuIF-Bn0apw/maxresdefault.jpg',
        link: 'https://youtu.be/KuIF-Bn0apw'
    }
];


