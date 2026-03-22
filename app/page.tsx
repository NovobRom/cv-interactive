"use client";
import { useState } from "react";

const content = {
  en: {
    name: "Roman Novobranets",
    tagline: "AI Evangelist | Operations & Process Transformation",
    location: "Vilnius, Lithuania",
    nav: { summary: "Summary", projects: "AI Projects", experience: "Experience", skills: "Skills" },
    summary: {
      title: "Professional Summary",
      text: "Operations leader with nearly 10 years at Nova Post who bridges the gap between business operations and AI implementation. Led operational launches across 3 Baltic markets, built AI-powered tools deployed in production by direct request from Nova Post Baltics CEO, and created an internal AI knowledge base used by frontline operators. Understands both the technology and the human side of AI adoption \u2014 where automation creates real value, how to translate business needs into working solutions, and why most AI initiatives fail at the change management stage, not the technology stage."
    },
    projects: {
      title: "AI Projects \u2014 Built & Deployed",
      items: [
        { name: "CEO-Requested Analytics: Client Segments & Competitive Pricing", tag: "Built by Nova Post Baltics CEO request", links: [{ label: "Client Analytics", url: "https://client-analytics-new.vercel.app/" }, { label: "Market Benchmark", url: "https://logistics-benchmark.vercel.app/" }], bullets: ["Two tools built by direct Nova Post Baltics CEO request to support strategic decisions: C2C client segmentation and Baltic market competitor pricing analysis", "Provides leadership with structured data for pricing strategy and client portfolio management"] },
        { name: "Delivery Performance Analytics", tag: "Self-initiated", links: [{ label: "Live Dashboard", url: "https://new-delivery-dashboard.vercel.app/" }], bullets: ["Dashboard for tracking address delivery performance, failure patterns, and courier efficiency", "Built to give operational managers visibility they currently lack for data-driven delivery optimization"] },
        { name: "Internal AI Knowledge Base for Operators", tag: "Gemini + NotebookLM", links: [], bullets: ["AI-powered consultant for frontline operators: prohibited goods identification, cross-border invoicing rules, claims decision support", "Reduces operator dependency on managers for routine knowledge queries \u2014 a scalable alternative to 1-on-1 training"] },
        { name: "Ubudget.app \u2014 Personal Product Built with AI", tag: "End-to-end product", links: [{ label: "ubudget.app", url: "https://ubudget.app" }], bullets: ["Full product cycle from idea to launch: budget tracking web app built entirely through AI-assisted development", "Demonstrates end-to-end product thinking: from idea through design to deployed product, using AI as a development tool"] }
      ]
    },
    experience: {
      title: "Professional Experience",
      items: [
        { role: "Branch Manager / Head of Delivery", company: "Nova Post Lithuania", period: "Apr 2025 \u2014 Present", location: "Vilnius, Lithuania", bullets: ["Managing branch operations and address delivery service across Lithuania", "Responsible for courier team performance, KPI, and client service quality"] },
        { role: "Operations Manager \u2014 Baltic Region", company: "Nova Post Lithuania", period: "Sep 2023 \u2014 Mar 2025", location: "Vilnius, Lithuania", bullets: ["Led operational launch and management across 3 markets (Lithuania, Latvia, Estonia)", "Built depot infrastructure and address delivery operations from scratch in all three countries", "Managed cross-functional teams; reported to Nova Post Baltics CEO", "Built AI knowledge base, operational SOPs, and defined technical requirements for IT/product teams", "Consulted by Nova Post Baltics CEO as first point of contact for operational diagnosis across Baltic markets"] },
        { role: "Branch Manager (Post Store)", company: "Nova Post Lithuania", period: "Jul \u2014 Aug 2023", location: "Vilnius, Lithuania", bullets: ["Initial role upon joining Nova Post Lithuania; managed branch and client-facing operations"] },
        { role: "Territorial Manager", company: "Nova Post Ukraine", period: "Jun 2021 \u2014 May 2022", location: "Luhansk Region, Ukraine", bullets: ["Managed network of 23 post offices; led relocation, standardization, and renovation", "Responsible for KPI implementation, P&L analysis, team recruitment and performance reviews"] },
        { role: "Head of Post Office", company: "Nova Post Ukraine", period: "Nov 2018 \u2014 May 2021", location: "Rubezhnoye, Ukraine", bullets: ["Full branch operations: team, cash flow, inventory, customer service; trained and onboarded new staff"] }
      ]
    },
    skills: {
      title: "Skills & Tools",
      categories: [
        { name: "AI & Tech", items: "Claude, Claude Code, Gemini, NotebookLM, Google AI Studio, Python, Streamlit, Next.js, GitHub, Vercel, AI-assisted web development, AI agents (API), data dashboards" },
        { name: "Methodologies", items: "Lean methodology, process documentation, SOP development, roadmap planning" },
        { name: "Operations", items: "Process design, KPI management, logistics, multi-country operations, team management, change management" },
        { name: "Languages", items: "Ukrainian (native), Russian (native), English (B1), Lithuanian (A1)" }
      ],
      education: "Bachelor\u2019s in Economics of Enterprise \u2014 Volodymyr Dahl East Ukrainian National University (2016\u20132020)"
    }
  },
  ua: {
    name: "\u0420\u043E\u043C\u0430\u043D \u041D\u043E\u0432\u043E\u0431\u0440\u0430\u043D\u0435\u0446\u044C",
    tagline: "AI Evangelist | \u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0430 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0456\u0432",
    location: "\u0412\u0456\u043B\u044C\u043D\u044E\u0441, \u041B\u0438\u0442\u0432\u0430",
    nav: { summary: "\u0420\u0435\u0437\u044E\u043C\u0435", projects: "AI \u041F\u0440\u043E\u0454\u043A\u0442\u0438", experience: "\u0414\u043E\u0441\u0432\u0456\u0434", skills: "\u041D\u0430\u0432\u0438\u0447\u043A\u0438" },
    summary: {
      title: "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0435 \u0440\u0435\u0437\u044E\u043C\u0435",
      text: "\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u043A \u0437 \u043C\u0430\u0439\u0436\u0435 10-\u0440\u0456\u0447\u043D\u0438\u043C \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0443 Nova Post, \u044F\u043A\u0438\u0439 \u0437\u2019\u0454\u0434\u043D\u0443\u0454 \u0431\u0456\u0437\u043D\u0435\u0441-\u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0437 \u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F\u043C AI. \u041E\u0447\u043E\u043B\u044E\u0432\u0430\u0432 \u0437\u0430\u043F\u0443\u0441\u043A \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439 \u043D\u0430 3 \u0431\u0430\u043B\u0442\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0440\u0438\u043D\u043A\u0430\u0445, \u0441\u0442\u0432\u043E\u0440\u0438\u0432 AI-\u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438, \u0449\u043E \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u0443 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0456 \u0437\u0430 \u043F\u0440\u044F\u043C\u0438\u043C \u0437\u0430\u043F\u0438\u0442\u043E\u043C CEO Nova Post Baltics, \u0442\u0430 \u043F\u043E\u0431\u0443\u0434\u0443\u0432\u0430\u0432 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044E AI-\u0431\u0430\u0437\u0443 \u0437\u043D\u0430\u043D\u044C \u0434\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 \u043F\u0435\u0440\u0448\u043E\u0457 \u043B\u0456\u043D\u0456\u0457. \u0420\u043E\u0437\u0443\u043C\u0456\u0454 \u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0443, \u0456 \u043B\u044E\u0434\u0441\u044C\u043A\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F AI \u2014 \u0434\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044F \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0440\u0435\u0430\u043B\u044C\u043D\u0443 \u0446\u0456\u043D\u043D\u0456\u0441\u0442\u044C, \u044F\u043A \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438 \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0432 \u0440\u043E\u0431\u043E\u0447\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F, \u0456 \u0447\u043E\u043C\u0443 \u0431\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C AI-\u0456\u043D\u0456\u0446\u0456\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0432\u0430\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0435\u0442\u0430\u043F\u0456 change management, \u0430 \u043D\u0435 \u043D\u0430 \u0435\u0442\u0430\u043F\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439."
    },
    projects: {
      title: "AI \u041F\u0440\u043E\u0454\u043A\u0442\u0438 \u2014 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456 \u0442\u0430 \u0437\u0430\u0434\u0435\u043F\u043B\u043E\u0454\u043D\u0456",
      items: [
        { name: "\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430 \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C CEO: \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0442\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u0435 \u0446\u0456\u043D\u043E\u0443\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F", tag: "\u0417\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C CEO Nova Post Baltics", links: [{ label: "\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432", url: "https://client-analytics-new.vercel.app/" }, { label: "\u0411\u0435\u043D\u0447\u043C\u0430\u0440\u043A \u0440\u0438\u043D\u043A\u0443", url: "https://logistics-benchmark.vercel.app/" }], bullets: ["\u0414\u0432\u0430 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456 \u0437\u0430 \u043F\u0440\u044F\u043C\u0438\u043C \u0437\u0430\u043F\u0438\u0442\u043E\u043C CEO Nova Post Baltics: \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0446\u0456\u044F C2C-\u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0442\u0430 \u0430\u043D\u0430\u043B\u0456\u0437 \u0446\u0456\u043D \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0456\u0432 \u043D\u0430 \u0431\u0430\u043B\u0442\u0456\u0439\u0441\u044C\u043A\u043E\u043C\u0443 \u0440\u0438\u043D\u043A\u0443", "\u0417\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438 \u0434\u043B\u044F \u0446\u0456\u043D\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457 \u0442\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0441\u044C\u043A\u0438\u043C \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435\u043C"] },
        { name: "\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438", tag: "\u0412\u043B\u0430\u0441\u043D\u0430 \u0456\u043D\u0456\u0446\u0456\u0430\u0442\u0438\u0432\u0430", links: [{ label: "\u0414\u0430\u0448\u0431\u043E\u0440\u0434", url: "https://new-delivery-dashboard.vercel.app/" }], bullets: ["\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u0434\u043B\u044F \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F \u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0456\u0432 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0457 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438, \u043F\u0430\u0442\u0435\u0440\u043D\u0456\u0432 \u0437\u0431\u043E\u0457\u0432 \u0442\u0430 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u043A\u0443\u0440\u2019\u0454\u0440\u0456\u0432", "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439 \u0449\u043E\u0431 \u0434\u0430\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C \u0432\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C \u0434\u043B\u044F \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u0457 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0434\u0430\u043D\u0438\u0445"] },
        { name: "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044F AI-\u0431\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u044C \u0434\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432", tag: "Gemini + NotebookLM", links: [], bullets: ["AI-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u0434\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 \u043F\u0435\u0440\u0448\u043E\u0457 \u043B\u0456\u043D\u0456\u0457: \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432, \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0438\u0445 \u0456\u043D\u0432\u043E\u0439\u0441\u0456\u0432, \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0440\u0456\u0448\u0435\u043D\u044C \u043F\u043E \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0456\u044F\u0445", "\u0417\u043D\u0438\u0436\u0443\u0454 \u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 \u0432\u0456\u0434 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432 \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043E\u0432\u0430\u043D\u0430 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044E"] },
        { name: "Ubudget.app \u2014 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439 \u0437 AI", tag: "\u041F\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0438\u0439 \u0446\u0438\u043A\u043B", links: [{ label: "ubudget.app", url: "https://ubudget.app" }], bullets: ["\u041F\u043E\u0432\u043D\u0438\u0439 \u0446\u0438\u043A\u043B \u0432\u0456\u0434 \u0456\u0434\u0435\u0457 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443: \u0432\u0435\u0431-\u0434\u043E\u0434\u0430\u0442\u043E\u043A \u0434\u043B\u044F \u0431\u044E\u0434\u0436\u0435\u0442\u0443, \u043F\u043E\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 AI-assisted \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0443", "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0454 end-to-end \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0435 \u043C\u0438\u0441\u043B\u0435\u043D\u043D\u044F: \u0432\u0456\u0434 \u0456\u0434\u0435\u0457 \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D \u0434\u043E \u0437\u0430\u0434\u0435\u043F\u043B\u043E\u0454\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443"] }
      ]
    },
    experience: {
      title: "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434",
      items: [
        { role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F / \u041A\u0435\u0440\u0456\u0432\u043D\u0438\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438", company: "Nova Post Lithuania", period: "\u041A\u0432\u0456\u0442\u0435\u043D\u044C 2025 \u2014 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441", location: "\u0412\u0456\u043B\u044C\u043D\u044E\u0441, \u041B\u0438\u0442\u0432\u0430", bullets: ["\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F\u043C\u0438 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u044E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u044E \u043F\u043E \u041B\u0438\u0442\u0432\u0456", "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u043A\u0443\u0440\u2019\u0454\u0440\u0441\u044C\u043A\u043E\u0457 \u043A\u043E\u043C\u0430\u043D\u0434\u0438, KPI \u0442\u0430 \u044F\u043A\u0456\u0441\u0442\u044C \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F"] },
        { role: "\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u2014 \u0411\u0430\u043B\u0442\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u0440\u0435\u0433\u0456\u043E\u043D", company: "Nova Post Lithuania", period: "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C 2023 \u2014 \u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C 2025", location: "\u0412\u0456\u043B\u044C\u043D\u044E\u0441, \u041B\u0438\u0442\u0432\u0430", bullets: ["\u041E\u0447\u043E\u043B\u044E\u0432\u0430\u0432 \u0437\u0430\u043F\u0443\u0441\u043A \u0442\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F\u043C\u0438 \u043D\u0430 3 \u0440\u0438\u043D\u043A\u0430\u0445 (\u041B\u0438\u0442\u0432\u0430, \u041B\u0430\u0442\u0432\u0456\u044F, \u0415\u0441\u0442\u043E\u043D\u0456\u044F)", "\u041F\u043E\u0431\u0443\u0434\u0443\u0432\u0430\u0432 \u0434\u0435\u043F\u043E-\u0456\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0457 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0437 \u043D\u0443\u043B\u044F", "\u041A\u0435\u0440\u0443\u0432\u0430\u0432 \u043A\u0440\u043E\u0441-\u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438; \u0437\u0432\u0456\u0442\u0443\u0432\u0430\u0432 CEO Nova Post Baltics", "\u0421\u0442\u0432\u043E\u0440\u0438\u0432 AI-\u0431\u0430\u0437\u0443 \u0437\u043D\u0430\u043D\u044C, \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0456 SOP, \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0432 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0432\u0438\u043C\u043E\u0433\u0438 \u0434\u043B\u044F IT/\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434", "\u0417\u0430\u043B\u0443\u0447\u0430\u0432\u0441\u044F CEO Nova Post Baltics \u044F\u043A \u043F\u0435\u0440\u0448\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u0434\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438"] },
        { role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F (Post Store)", company: "Nova Post Lithuania", period: "\u041B\u0438\u043F\u0435\u043D\u044C \u2014 \u0421\u0435\u0440\u043F\u0435\u043D\u044C 2023", location: "\u0412\u0456\u043B\u044C\u043D\u044E\u0441, \u041B\u0438\u0442\u0432\u0430", bullets: ["\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0440\u043E\u043B\u044C \u043F\u0440\u0438 \u043F\u0440\u0438\u0454\u0434\u043D\u0430\u043D\u043D\u0456 \u0434\u043E Nova Post Lithuania"] },
        { role: "\u0422\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", company: "Nova Post Ukraine", period: "\u0427\u0435\u0440\u0432\u0435\u043D\u044C 2021 \u2014 \u0422\u0440\u0430\u0432\u0435\u043D\u044C 2022", location: "\u041B\u0443\u0433\u0430\u043D\u0441\u044C\u043A\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0423\u043A\u0440\u0430\u0457\u043D\u0430", bullets: ["\u041A\u0435\u0440\u0443\u0432\u0430\u0432 \u043C\u0435\u0440\u0435\u0436\u0435\u044E \u0437 23 \u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0445 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u044C", "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430 KPI, P&L \u0430\u043D\u0430\u043B\u0456\u0437, \u0440\u0435\u043A\u0440\u0443\u0442\u0438\u043D\u0433 \u0442\u0430 \u043E\u0446\u0456\u043D\u043A\u0443 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456"] },
        { role: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F", company: "Nova Post Ukraine", period: "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434 2018 \u2014 \u0422\u0440\u0430\u0432\u0435\u043D\u044C 2021", location: "\u0420\u0443\u0431\u0456\u0436\u043D\u0435, \u0423\u043A\u0440\u0430\u0457\u043D\u0430", bullets: ["\u041F\u043E\u0432\u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F\u043C\u0438: \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0433\u0440\u043E\u0448\u043E\u0432\u0438\u0439 \u043F\u043E\u0442\u0456\u043A, \u0456\u043D\u0432\u0435\u043D\u0442\u0430\u0440, \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"] }
      ]
    },
    skills: {
      title: "\u041D\u0430\u0432\u0438\u0447\u043A\u0438 \u0442\u0430 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
      categories: [
        { name: "AI & Tech", items: "Claude, Claude Code, Gemini, NotebookLM, Google AI Studio, Python, Streamlit, Next.js, GitHub, Vercel, AI-assisted \u0432\u0435\u0431-\u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0430, AI \u0430\u0433\u0435\u043D\u0442\u0438 (API), \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0438" },
        { name: "\u041C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0456\u0457", items: "Lean, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0456\u0432, \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0430 SOP, \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0430\u0434\u043C\u0435\u043F\u0456\u0432" },
        { name: "\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u0457", items: "\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0440\u043E\u0446\u0435\u0441\u0456\u0432, \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F KPI, \u043B\u043E\u0433\u0456\u0441\u0442\u0438\u043A\u0430, \u043C\u0443\u043B\u044C\u0442\u0438\u043A\u0440\u0430\u0457\u043D\u043D\u0456 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457, \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438, change management" },
        { name: "\u041C\u043E\u0432\u0438", items: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (\u0440\u0456\u0434\u043D\u0430), \u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0430 (\u0440\u0456\u0434\u043D\u0430), \u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 (B1), \u041B\u0438\u0442\u043E\u0432\u0441\u044C\u043A\u0430 (A1)" }
      ],
      education: "\u0411\u0430\u043A\u0430\u043B\u0430\u0432\u0440 \u0437 \u0435\u043A\u043E\u043D\u043E\u043C\u0456\u043A\u0438 \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u0430 \u2014 \u0421\u0445\u0456\u0434\u043D\u043E\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439 \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0456\u043C. \u0412. \u0414\u0430\u043B\u044F (2016\u20132020)"
    }
  }
};

export default function Page() {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];
  const sections = ["summary", "projects", "experience", "skills"];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e6e3", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #3b82f6; color: white; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
        .nav-item { padding: 8px 16px; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 14px; font-weight: 500; white-space: nowrap; border: 1px solid transparent; }
        .nav-item:hover { background: rgba(59,130,246,0.1); color: #3b82f6; }
        .nav-item.active { background: rgba(59,130,246,0.15); color: #3b82f6; border-color: rgba(59,130,246,0.3); }
        .project-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 24px; transition: all 0.3s; }
        .project-card:hover { border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.03); transform: translateY(-2px); }
        .tag { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; background: rgba(59,130,246,0.12); color: #60a5fa; border: 1px solid rgba(59,130,246,0.2); }
        .link-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-size: 13px; color: #3b82f6; background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.15); text-decoration: none; transition: all 0.2s; }
        .link-btn:hover { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.3); }
        .exp-item { padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .exp-item:last-child { border-bottom: none; }
        .lang-toggle { display: flex; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
        .lang-btn { padding: 6px 14px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: transparent; color: #888; border: none; font-family: 'Space Mono', monospace; }
        .lang-btn.active { background: #3b82f6; color: white; }
        .skill-cat { margin-bottom: 16px; }
        .skill-name { font-family: 'Space Mono', monospace; font-size: 13px; color: #3b82f6; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px; }
        .mobile-menu-btn { display: none; background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #e8e6e3; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 14px; }
        @media (max-width: 768px) { .mobile-menu-btn { display: block; } .desktop-nav { display: none; } .mobile-nav { display: flex; flex-direction: column; gap: 4px; padding: 12px 0; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } .desktop-nav { display: flex; } }
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,15,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "12px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>R</div>
              <span style={{ fontWeight: 700, fontSize: 16, whiteSpace: "nowrap" }}>{t.name.split(" ")[0]}</span>
            </div>
            <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {sections.map((s) => (<div key={s} className={`nav-item ${activeSection === s ? "active" : ""}`} onClick={() => setActiveSection(s)}>{t.nav[s]}</div>))}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="lang-toggle">
                <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
                <button className={`lang-btn ${lang === "ua" ? "active" : ""}`} onClick={() => setLang("ua")}>UA</button>
              </div>
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>&#9776;</button>
            </div>
          </div>
          {mobileMenuOpen && (<nav className="mobile-nav">{sections.map((s) => (<div key={s} className={`nav-item ${activeSection === s ? "active" : ""}`} onClick={() => { setActiveSection(s); setMobileMenuOpen(false); }}>{t.nav[s]}</div>))}</nav>)}
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 80px" }}>
        {activeSection === "summary" && (
          <div className="fade-up">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 32, margin: "0 auto 20px" }}>R</div>
              <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.5px" }}>{t.name}</h1>
              <p style={{ fontSize: 17, color: "#3b82f6", fontWeight: 500, marginBottom: 12 }}>{t.tagline}</p>
              <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>{t.location}</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://linkedin.com/in/romannovobranets" target="_blank" rel="noreferrer" className="link-btn">LinkedIn &#8599;</a>
                <a href="https://github.com/NovobRom" target="_blank" rel="noreferrer" className="link-btn">GitHub &#8599;</a>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#3b82f6", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>{t.summary.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#b8b5b0" }}>{t.summary.text}</p>
            </div>
          </div>
        )}
        {activeSection === "projects" && (
          <div className="fade-up">
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#3b82f6", textTransform: "uppercase", letterSpacing: 2, marginBottom: 32 }}>{t.projects.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {t.projects.items.map((p, i) => (
                <div key={i} className="project-card">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</h3>
                    <span className="tag">{p.tag}</span>
                  </div>
                  {p.links.length > 0 && (<div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>{p.links.map((l, j) => (<a key={j} href={l.url} target="_blank" rel="noreferrer" className="link-btn">{l.label} &#8599;</a>))}</div>)}
                  {p.bullets.map((b, j) => (<p key={j} style={{ fontSize: 14, lineHeight: 1.7, color: "#999", marginBottom: 6, paddingLeft: 16, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "#3b82f6" }}>&bull;</span>{b}</p>))}
                </div>
              ))}
            </div>
          </div>
        )}
        {activeSection === "experience" && (
          <div className="fade-up">
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#3b82f6", textTransform: "uppercase", letterSpacing: 2, marginBottom: 32 }}>{t.experience.title}</h2>
            {t.experience.items.map((e, i) => (
              <div key={i} className="exp-item">
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{e.role}</h3>
                <p style={{ fontSize: 14, color: "#3b82f6", fontWeight: 500, marginBottom: 2 }}>{e.company}</p>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>{e.period} &middot; {e.location}</p>
                {e.bullets.map((b, j) => (<p key={j} style={{ fontSize: 14, lineHeight: 1.7, color: "#999", marginBottom: 4, paddingLeft: 16, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "#444" }}>&ndash;</span>{b}</p>))}
              </div>
            ))}
          </div>
        )}
        {activeSection === "skills" && (
          <div className="fade-up">
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#3b82f6", textTransform: "uppercase", letterSpacing: 2, marginBottom: 32 }}>{t.skills.title}</h2>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 32 }}>
              {t.skills.categories.map((c, i) => (<div key={i} className="skill-cat"><div className="skill-name">{c.name}</div><p style={{ fontSize: 15, lineHeight: 1.7, color: "#b8b5b0" }}>{c.items}</p></div>))}
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="skill-name">{lang === "en" ? "Education" : "\u041E\u0441\u0432\u0456\u0442\u0430"}</div>
                <p style={{ fontSize: 15, color: "#b8b5b0" }}>{t.skills.education}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#444" }}>
          {lang === "en" ? "This interactive CV was built using AI-assisted development \u2014 demonstrating the AI-first approach in practice" : "\u0426\u0435 \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0435 CV \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0435 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E AI \u2014 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u044F AI-first \u043F\u0456\u0434\u0445\u043E\u0434\u0443 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u0446\u0456"}
        </p>
      </footer>
    </div>
  );
}
