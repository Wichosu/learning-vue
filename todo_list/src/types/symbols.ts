import type { InjectionKey } from "vue";
import type { RemoveTask, SendToEndOfList } from "./types";

export const RemoveTaskKey = Symbol() as InjectionKey<RemoveTask>;

export const SendToEndOfListKey = Symbol() as InjectionKey<SendToEndOfList>;