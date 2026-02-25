import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SubmitContactMessage {
    service: Array<string>;
    name: string;
    email: string;
    company?: string;
    message: string;
    budget: string;
}
export interface ContactMessage {
    service: Array<string>;
    name: string;
    email: string;
    company?: string;
    message: string;
    budget: string;
}
export interface backendInterface {
    getMessages(): Promise<Array<ContactMessage>>;
    submitContactMessage(newMessage: SubmitContactMessage): Promise<void>;
}
