import { Member } from "./member";

export type MemberWithoutId = Omit<Member, 'id'>;