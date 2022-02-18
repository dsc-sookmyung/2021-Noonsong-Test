interface Info {
    noonsong1_ratio: number;
    noonsong1_name: string;
    noonsong2_ratio: number;
    noonsong2_name: string;
    noonsong3_ratio: number;
    noonsong3_name: string;
    noonsong4_ratio: number;
    noonsong4_name: string;
    noonsong5_ratio: number;
    noonsong5_name: string;
    noonsong6_ratio: number;
    noonsong6_name: string;
    noonsong7_ratio: number;
    noonsong7_name: string;
    noonsong8_ratio: number;
    noonsong8_name: string;
}

interface Stat extends Info {
    maxnoonsong_title: string;
    maxnoonsong_image: string;
}

interface StatProps {
    stat: Stat;
    label: string;
    selectHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    viewResult: (e: React.MouseEvent<HTMLElement>) => void;
    info?: Info;
}

interface ChartProps {
    info: Info;
}

interface TestProps {
    isOpened: boolean;
    close: () => void;
}

interface ChatProps {
    numbers: number[];
    nowSelected: number[];
    loaded: boolean;
    questions: [];
    getSelected: (selectedIndex: number) => void;
    handleLoad: () => void;
}

interface MessagesProps {
    numbers: number[];
    selected: number[];
    contents: [];
    loaded: boolean;
}

interface MessageProps extends SpeechBubbleProps {
    text: any;
    selectedAnswer: number[];
    index: number;
}

interface SpeechBubbleProps {
    children?: any;
    role?: string;
}

interface TitleImage {
    title: string;
    image: string;
}
  
interface Result extends TitleImage {
    explain: string;
}

interface ResultProps extends Result {
    viewStat: (e: React.MouseEvent<HTMLElement>) => void;
}

export type { 
    TestProps, ChatProps, MessagesProps, MessageProps, SpeechBubbleProps,
    Stat, StatProps, ChartProps, TitleImage, Result, ResultProps
};
