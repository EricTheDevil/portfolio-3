import React, { lazy, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

import { MeshLine, MeshLineMaterial } from "./Components/MeshLine";
import Header from "./Components/Header";
import PageBuffer from "./Components/PageBuffer";
import Footer from "./Components/Footer";

import "./styles.scss";

extend({ MeshLine, MeshLineMaterial, OrbitControls });

const AboutPage = lazy(() => import("./Pages/AboutPage"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const SkillsPage = lazy(() => import("./Pages/SkillsPage"));
const ProjectPage = lazy(() => import("./Pages/ProjectPage"));
const Experience = lazy(() => import("./Pages/ExperiencePage"));

export function App() {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loader />}>
                <LandingPage />
            </Suspense>
            <PageBuffer />
            <AboutPage />
            <PageBuffer />
            <SkillsPage />
            <PageBuffer />
            <ProjectPage />
            <PageBuffer />
            <Experience />
            <Footer />
        </div>
    );
}
