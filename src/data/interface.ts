export interface ReviewData {
    [key: string]: {
        Leftside: {
            img?: string;
            title: string;
            text?: string;
        }
        Rightside: {
            title?: string;
            text: string;
        }
    }
}