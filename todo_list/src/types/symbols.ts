import type { InjectionKey } from "vue";
import type { RemoveTask, SendToEndOfList, SendToStartOfList } from "./types";

export const RemoveTaskKey = Symbol() as InjectionKey<RemoveTask>;

export const SendToEndOfListKey = Symbol() as InjectionKey<SendToEndOfList>;

export const SendToStartOfListKey = Symbol() as InjectionKey<SendToStartOfList>;