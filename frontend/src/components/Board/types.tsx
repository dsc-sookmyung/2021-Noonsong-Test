interface BoardProps {
    isOpened: boolean;
    close: (e?: React.MouseEvent<HTMLElement>) => void;
}

interface CommentProps {
    name: string;
    comment: string;
}

interface CommentsProps {
    comments: CommentProps[];  
}

interface FormProps {
    saveComment: (prop: CommentProps) => (e: React.FormEvent<HTMLFormElement>) => void;
    getComment: (e: React.FormEvent<HTMLFormElement>) => void;
    handleLoad: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type {
    BoardProps, CommentProps, CommentsProps, FormProps
}