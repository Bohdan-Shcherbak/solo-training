// Видаляє непотрібні файли, які були видалені в джерелі
// import { del } from "del";
import { deleteAsync } from 'del';

export const reset = () => {
    return deleteAsync(app.path.clean);
}