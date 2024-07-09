import { paginate } from "../utils/pagination";

export class InMemoryStore<T extends { id: string }> {
    private data: T[] = [];

    constructor(initialData?: T[]) {
        if (initialData) {
            this.data = initialData;
        }
    }

    add(item: T): T {
        const newItem = { ...item } as T;
        this.data.push(newItem);
        return newItem;
    }

    update(id: string, updatedItem: Partial<T>): T | null {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...updatedItem };
            return this.data[index];
        }
        return null;
    }

    delete(id: string): boolean {
        const initialLength = this.data.length;
        this.data = this.data.filter(item => item.id !== id);
        return this.data.length !== initialLength;
    }

    getAll(): T[] {
        return this.data;
    }

    getById(id: string): T | undefined {
        return this.data.find(item => item.id === id);
    }

    getPaginated(page: number, limit: number) {
        const { startIndex, endIndex } = paginate(page, limit);
        return {
            data: this.data.slice(startIndex, endIndex),
            total: this.data.length,
            page,
            totalPages: Math.ceil(this.data.length / limit)
        };
    }
}