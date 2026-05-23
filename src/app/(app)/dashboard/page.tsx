import { ReactNode } from "react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-4xl font-bold">
                    Welcome back 👋
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Your AI workspace overview.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-sm border">
                    <h3 className="text-sm text-muted-foreground">
                        Total Conversations
                    </h3>

                    <p className="mt-2 text-3xl font-bold">
                        12
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border">
                    <h3 className="text-sm text-muted-foreground">
                        AI Generations
                    </h3>

                    <p className="mt-2 text-3xl font-bold">
                        86
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border">
                    <h3 className="text-sm text-muted-foreground">
                        Saved Prompts
                    </h3>

                    <p className="mt-2 text-3xl font-bold">
                        24
                    </p>
                </div>
            </div>
        </div>
    );
}