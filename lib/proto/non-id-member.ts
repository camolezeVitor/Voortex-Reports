import { Member } from "./member";

export type NonIdMember = Omit<Member, 'id'>;