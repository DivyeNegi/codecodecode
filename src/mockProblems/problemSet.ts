export type Problem={
    id: string;
    isSolved?: boolean; // Optional property to indicate if the problem is solved
    title: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
    likes: number;
    dislikes: number;
}

export const problemSet: Problem[] = [
    {
        id: '1',
        title: 'Two Sum',
        description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
        difficulty: 'easy',
        tags: ['array', 'hash-table'],
        likes: 1200,
        isSolved: true,
        dislikes: 100
    },
    {
        id: '2',
        title: 'Add Two Numbers',
        description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit.',
        difficulty: 'medium',
        tags: ['linked-list', 'math'],
        likes: 1500,
        dislikes: 200
    }
];